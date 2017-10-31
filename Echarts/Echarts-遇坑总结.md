### 工作中使用到的echart汇总

1. 如果发现echart的图表留白太多，那么应该设置grid中的x，y，x2 , y2相关的值
2. 若x轴中的所列条件太多那么应该在XAxis中的axisLabel中设置interval 为0 ，也可以加个小旋转route效果更佳。
3. 如果想让柱状图等图形有不同的颜色。可以再series里面的itemStyle中设置加入以下代   
	`color: function(params) {     			    
	    var colorList = ['#f0784c', '#ce59b7', '#ef5d42'];    
   	    return colorList[params.dataIndex];   
    }`
  