(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),{lightningChart:i,PalettedFill:n,LUT:l,regularColorSteps:r,emptyLine:d,Themes:o}=s,{createWaterDropDataGenerator:p}=a(863),m=1e3,h=1e3,u=i().ChartXY({}).setTitle(`Heatmap Grid Series 1000x1000 (${1..toFixed(1)} million data points)`).setPadding({right:40}),g=new l({units:"intensity",percentageValues:!0,steps:r(0,.7,u.getTheme().examples.intensityColorPalette),interpolate:!1});p().setRows(m).setColumns(h).generate().then((e=>{u.addHeatmapGridSeries({columns:m,rows:h,start:{x:0,y:0},end:{x:m,y:h},dataOrder:"columns"}).setFillStyle(new n({lut:g})).setWireframeStyle(d).invalidateIntensityValues(e),u.addLegendBox().setAutoDispose({type:"max-width",maxWidth:.3}).add(u)}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);