(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),{lightningChart:n,PalettedFill:r,LUT:i,regularColorSteps:l,emptyLine:o,Themes:d}=s,{createWaterDropDataGenerator:h}=a(863),m=1e3,p=1e3,u=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:d[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle(`Heatmap Grid Series 1000x1000 (${1..toFixed(1)} million data points)`).setPadding({right:40}),c=new i({units:"intensity",percentageValues:!0,steps:l(0,.7,u.getTheme().examples.intensityColorPalette),interpolate:!1});h().setRows(m).setColumns(p).generate().then((e=>{u.addHeatmapGridSeries({columns:m,rows:p,start:{x:0,y:0},end:{x:m,y:p},dataOrder:"columns"}).setFillStyle(new r({lut:c})).setWireframeStyle(o).invalidateIntensityValues(e),u.addLegendBox().setAutoDispose({type:"max-width",maxWidth:.3}).add(u)}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);