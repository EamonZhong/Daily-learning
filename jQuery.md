# jQuery #

1. 选择器：

		$('#div') id选择器
		$('.li') class选择器
		$('input[type="button"]')  属性选择器		
		$('li[class*="li"]') 属性通配选择器		
		$('li[class^="li"]') 属性开头选择器	
		$('li[class$="li"]') 属性结尾选择器		
		$('li[class!="li"]') 属性排除选择器		
		$('li:odd') 奇数选择器 （从0开始计数）		
		$('li:even') 偶数选择器 （从0开始计数）				
		$('li:gt(3)') 大于选择器
		$('li:lt(3)') 小于选择器		
		$('li:eq(3)') 下标选择器

2. DOM操作：

		prev()  		上一个 
		next()  		下一个
		children() 		子级
		parent()		父级
		siblings()		兄弟级
		first()			第一个 
		last()			最后一个

3. BOM操作：

		height()/width() 
		设置的宽高，不支持padding和border
				
		innerWidth()/innerHeight() 支持padding 不支持border
		设置：设置之后总的宽高为固定的某个值（不带border）。
				
		outerHeight/outerWidth 支持padding和border(获取的时候还支持margin)
		设置：设置之后总的宽高为固定的某个值。