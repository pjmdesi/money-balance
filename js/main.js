function refreshCalc() {
	let calc = 0,
		budg = parseInt($("#budgetAmount").attr('bud'));


	if ($('.entry input').eq(0).val() > 0) {
		for (let i of $('.entry input')) {
			$(i).val(Math.ceil($(i).val()));
			calc += parseInt($(i).val());
		}
	}

	$("#budgetAmount").html(Math.floor(budg-calc));
}

$(function(){
	refreshCalc();

	$('.entry input').keyup(function() {
			refreshCalc();
		}
	)
	$('input').on('focus', function() {
		$(this).select();
	})

	$('#addButton').on('click', function() {
		if (parseInt($('.entryRow input').last().val()) > 0){
			var newrow = $('#ER1').clone(true),
				prerow = $('.entryRow').last();

			var prerowID = parseInt($(prerow).attr('id')[2]);

			$(newrow)
				.val('')
				.attr('id','ER'+(prerowID+1));

			$(newrow).insertAfter('#ER'+prerowID).hide().slideDown(200);
			newrow.val('');
		}
		refreshCalc();
	})

	$('.delButton').on('click', function() {
		var row = $(this).parents('.entryRow');
		row.slideUp(200, function() {
			row.remove();
			var len = $('.entryRow').length;
			for (i = 0; i < len; i++) {
				$('.entryRow').eq(i).attr('id','ER'+(i+1));
			}
			refreshCalc();
		})
	})

	$('#clearButton').on('click', function() {
		for (i of $('.entryRow')) {
			if (!($(i).attr('id') == 'ER1')) {
				$(i).slideUp(100, function() {
					$(this).remove()
				})
			} else {
				$(i).val('');
			}
		}
		refreshCalc();
	})
})
