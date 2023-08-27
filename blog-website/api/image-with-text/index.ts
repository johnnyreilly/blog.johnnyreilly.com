import type { AzureFunction, Context, HttpRequest } from '@azure/functions';

const iconSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700.000000pt" height="700.000000pt" viewBox="0 0 700.000000 700.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)"
fill="#3178C6" stroke="none">
<path d="M0 3500 l0 -3500 2103 0 2102 0 -35 22 c-117 72 -279 181 -365 247
-108 81 -320 288 -371 361 l-32 45 211 406 211 406 56 -111 c99 -198 204 -341
358 -487 199 -190 423 -324 659 -395 122 -37 289 -39 376 -5 118 46 205 169
215 300 6 85 -15 169 -72 288 -57 118 -120 211 -270 396 -66 82 -156 193 -199
246 -107 131 -199 272 -262 399 -98 197 -137 351 -137 537 0 184 33 319 124
503 306 623 950 800 1750 481 149 -59 427 -202 551 -283 l27 -18 0 1831 0
1831 -3500 0 -3500 0 0 -3500z m3950 1150 l0 -380 -600 0 -600 0 0 -1685 0
-1685 -475 0 -475 0 0 1685 0 1685 -600 0 -600 0 0 380 0 380 1675 0 1675 0 0
-380z"/>
<path d="M5807 2970 c-116 -30 -213 -119 -247 -227 -25 -81 -25 -110 -1 -205
43 -166 122 -286 471 -718 250 -309 394 -575 444 -822 20 -96 21 -282 2 -380
-31 -162 -125 -375 -231 -522 -28 -40 -55 -78 -59 -84 -5 -9 95 -12 403 -12
l411 0 0 1168 0 1169 -63 74 c-219 255 -517 456 -798 539 -83 24 -269 36 -332
20z"/>
</g>
</svg>
`;

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  try {
    const headers = req.headers;

    const headersJson = JSON.stringify(headers, null, 2);

    context.log('headers', headersJson)

    context.res = {
      status: 200,
      // body: headersJson,
      body: iconSvg,
      headers: {
        "Content-Type": "image/svg+xml",
        // 'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    context.log.error('Problem with returning headers', error);
  }
};

export default httpTrigger;
