"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([["9379"],{55769:function(e,t,i){function a(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}i.d(t,{A:function(){return a}}),(0,i(34022).eW)(a,"populateCommonDb")},19899:function(e,t,i){i.d(t,{diagram:function(){return W}});var a=i(55769),l=i(93904),r=i(4682),n=i(34022),o=i(3194),c=i(27818),s=n.vZ.pie,p={sections:new Map,showData:!1,config:s},d=p.sections,u=p.showData,g=structuredClone(s),f=(0,n.eW)(()=>structuredClone(g),"getConfig"),h=(0,n.eW)(()=>{d=new Map,u=p.showData,(0,n.ZH)()},"clear"),m=(0,n.eW)(({label:e,value:t})=>{d.has(e)||(d.set(e,t),n.cM.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),x=(0,n.eW)(()=>d,"getSections"),w=(0,n.eW)(e=>{u=e},"setShowData"),y=(0,n.eW)(()=>u,"getShowData"),S={getConfig:f,clear:h,setDiagramTitle:n.g2,getDiagramTitle:n.Kr,setAccTitle:n.GN,getAccTitle:n.eu,setAccDescription:n.U$,getAccDescription:n.Mx,addSection:m,getSections:x,setShowData:w,getShowData:y},T=(0,n.eW)((e,t)=>{(0,a.A)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),$={parse:(0,n.eW)(async e=>{let t=await (0,o.Qc)("pie",e);n.cM.debug(t),T(t,S)},"parse")},D=(0,n.eW)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),C=(0,n.eW)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return(0,c.ve8)().value(e=>e.value)(t)},"createPieArcs"),W={parser:$,db:S,renderer:{draw:(0,n.eW)((e,t,i,a)=>{n.cM.debug("rendering pie chart\n"+e);let o=a.db,s=(0,n.nV)(),p=(0,l.Rb)(o.getConfig(),s.pie),d=(0,r.P)(t),u=d.append("g");u.attr("transform","translate(225,225)");let{themeVariables:g}=s,[f]=(0,l.VG)(g.pieOuterStrokeWidth);f??=2;let h=p.textPosition,m=(0,c.Nb1)().innerRadius(0).outerRadius(185),x=(0,c.Nb1)().innerRadius(185*h).outerRadius(185*h);u.append("circle").attr("cx",0).attr("cy",0).attr("r",185+f/2).attr("class","pieOuterCircle");let w=o.getSections(),y=C(w),S=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],T=(0,c.PKp)(S);u.selectAll("mySlices").data(y).enter().append("path").attr("d",m).attr("fill",e=>T(e.data.label)).attr("class","pieCircle");let $=0;w.forEach(e=>{$+=e}),u.selectAll("mySlices").data(y).enter().append("text").text(e=>(e.data.value/$*100).toFixed(0)+"%").attr("transform",e=>"translate("+x.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let D=u.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*T.domain().length/2)+")");D.append("rect").attr("width",18).attr("height",18).style("fill",T).style("stroke",T),D.data(y).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:i}=e.data;return o.getShowData()?`${t} [${i}]`:t});let W=512+Math.max(...D.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));d.attr("viewBox",`0 0 ${W} 450`),(0,n.v2)(d,450,W,p.useMaxWidth)},"draw")},styles:D}}}]);