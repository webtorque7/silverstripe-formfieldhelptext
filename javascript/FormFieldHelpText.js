(function($){
	$.entwine('ss', function($){
		$('.field label.right, .field.span.description').entwine({
			onadd:function() {
				this.hide();
				var field = this.closest('.field');

				if (!field.hasClass('checkbox')) field.addClass('help-text');
			}
		});

		$('.field.help-text label.left').entwine({
			onmouseenter:function() {
				var field = this.closest('.field'),
					helpText = field.find('label.right').length ? field.find('label.right') : field.find('span.description'),
					pop = $('<div class="help-pop"><div class="arrow"></div>' + helpText.html() + '</div>'),
					pos = this.offset();

				this.append(pop);
			},
			onmouseleave:function() {
				var field = this.closest('.field');
				field.find('.help-pop').remove();
			}
		});
	});
})(jQuery);