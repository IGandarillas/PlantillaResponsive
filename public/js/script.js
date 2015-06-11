$(function(){
	var body=$('body');
	var itemGrid=$('.item-grid');
	var article=$('.article-cont');
	var button=$('#open-button');
	_init();
	_toggle();
	var scrolled=0;

	function _init(){
		x=$('article').height()+200;
		if(x<900){
			body.css('height','100%');
		}else{
			body.css('height',x);
		}
		$('.brand-name').on('click',function(){
			$(this).off('click');
				//body.addClass('opacity');
					//itemGrid.addClass('opacity');
					article.load('intro.html',function(){
					//body.removeClass('opacity');
					//itemGrid.removeClass('opacity');
			});
		});
		$('.item').one('click',function(){
			$('.item').off('click');
			$('.brand-name').off('click');
			//body.addClass('opacity');
			//itemGrid.addClass('opacity');
			artID= $(this).attr('data-index-number');
			_cerrar();
			article.load(artID+'.html',function(){
			//	body.removeClass('opacity');
			//	itemGrid.removeClass('opacity');
				_init();
			});

		});
	}
	function _cerrar(){
		var cond=itemGrid.attr('class')=='item-grid';
		if(cond){

		}else{
			itemGrid.attr('class','item-grid');
			button.attr('class','menu-button');
				
			body.attr('class','');
		}
	}
	function _toggle(){
		$('#open-button').on('click',function(){			
			
			var cond=itemGrid.attr('class')=='item-grid';
			if($(window).width()>=600){
				itemGrid.addClass('scroll');
				body.addClass('noscroll');
			}
			itemGrid.one('transitionend', function(e){		
				if(cond){		
					itemGrid.addClass('scroll');
					body.addClass('noscroll');
				}else{							
					itemGrid.removeClass('scroll');
				}				
			});				
			if(cond){
				itemGrid.addClass('open');
				button.addClass('open');	
				body.addClass('opacity');			
			}else{
				itemGrid.attr('class','item-grid');
				button.attr('class','menu-button');
				button.css('right','');	
				body.attr('class','');
			}
		});
	}
});

