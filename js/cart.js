$(document).ready(function() {
    $('.td-quantity .plus').click(function (e) { 
        var val = parseInt($(this).prev().val());
        $(this).prev().val(val+1);
        price =$(this).closest('tr').find('.td-price').data('price');
        totalUnit = price*val;
        html = '<span data-sum="'+totalUnit+'">'+totalUnit+'</span><sup>$</sup>';
        $(this).closest('tr').find('.td-sum').html(html);
        var list = $(this).closest('tbody').find('.td-sum');
        totalPriceFt(list)
    });;
    $('.td-quantity .minus').click(function (e) { 
        var val = $(this).next().val();
        if(val>1){
            $(this).next().val(val-1);
            var number = $(this).next().val();
            price =$(this).closest('tr').find('.td-price').data('price');
            totalUnit = price*number;
            html = '<span data-sum="'+totalUnit+'">'+Math.round(totalUnit * 100) / 100+'</span><sup>$</sup>';
            $(this).closest('tr').find('.td-sum').html(html);
            var list = $(this).closest('tbody').find('.td-sum');
            totalPriceFt(list);
        }
    });;
});
function deleteProduct(e){
    console.log(123);
    var tr = e.parentElement.parentElement;
    tr.remove();
}
function totalPriceFt(list){
    var totalPrice =0;
    list.each(function(i, e){
        totalPrice += $(e).find('span').data('sum');
    });
    var total = '<strong><span>'+Math.round(totalPrice * 100) / 100+'</span><sup>$</sup></strong>';
    $('tfoot').find('.td-total').html(total);
}