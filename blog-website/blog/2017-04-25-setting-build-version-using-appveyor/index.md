---
slug: setting-build-version-using-appveyor
title: 'Setting Build Version Using AppVeyor and ASP.Net Core'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'AppVeyor doesnt have support for setting version of a binary in dot net core, but it can be done easily through PowerShell.'
---

AppVeyor has [support for setting the version of a binary during a build](https://www.appveyor.com/docs/build-configuration/#assemblyinfo-patching). However - this deals with the classic ASP.Net world of `AssemblyInfo`. I didn't find any reference to support for doing the same with dot net core. Remember, dot net core [relies upon a `&lt;Version&gt;` or a `&lt;VersionPrefix&gt;` setting in the `.csproj` file](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/project-json-to-csproj#version). Personally, `&lt;Version&gt;` is my jam.

<!--truncate-->

However, coming up with your own bit of powershell that stamps the version during the build is a doddle; here we go:

```ps
Param($projectFile, $buildNum)

$content = [IO.File]::ReadAllText($projectFile)

$regex = new-object System.Text.RegularExpressions.Regex ('(<version>)([\d]+.[\d]+.[\d]+)(.[\d]+)(<\/Version>)',
         [System.Text.RegularExpressions.RegexOptions]::MultiLine)

$version = $null
$match = $regex.Match($content)
if($match.Success) {
    # from "<version>1.0.0.0</version>" this will extract "1.0.0"
    $version = $match.groups[2].value
}

# suffix build number onto $version. eg "1.0.0.15"
$version = "$version.$buildNum"

# update "<version>1.0.0.0</version>" to "<version>$version</version>"
$content = $regex.Replace($content, '${1}' + $version + '${4}')

# update csproj file
[IO.File]::WriteAllText($projectFile, $content)

# update AppVeyor build
Update-AppveyorBuild -Version $version
</version>
```

You can invoke this script as part of the build process in AppVeyor by adding something like this to your `appveyor.yml`.

```yml
before_build:
  - ps: .\ModifyVersion.ps1 $env:APPVEYOR_BUILD_FOLDER\src\Proverb.Web\Proverb.Web.csproj $env:APPVEYOR_BUILD_NUMBER
```

It will keep the first 3 parts of the version in your `.csproj` (eg "1.0.0") and suffix on the build number supplied by AppVeyor.
