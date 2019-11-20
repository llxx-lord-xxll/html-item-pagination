/*!
 * jQuery HTML ITEM PAGINATION
 * Version : 1.0.0
 * Author: Arifuzzaman Pranto (llxx_lord_xxll)
 * A library to create paginated html elements
 * Copyright:- Backspace Global
 *
 * Date: 2019-11-20
 */

jQuery.fn.hip = function(param) {
  var itemsPerRow = 1;
  var itemsPerPage = 12;
  var itemGaps = 15;  //in PX
  var paginationPos = "center";  //in PX
  var itemHeight = "auto";
  var dynItemsPerRow;
  var itemPerRowString = "";
  var HSitemPerRowString = "";
  var SMitemPerRowString = "";
  var MDitemPerRowString = "";
  var LGitemPerRowString = "";

  var rowPerPageString = "";
  var HSrowPerPageString = "";
  var SMrowPerPageString = "";
  var MDrowPerPageString = "";
  var LGrowPerPageString = "";
  var objects = $(this);

  if(objects.length>0){
    if (param.hasOwnProperty('itemsPerRow')) itemsPerRow = param.itemsPerRow;
    if (param.hasOwnProperty('itemsPerPage')) itemsPerPage = param.itemsPerPage;
    if (param.hasOwnProperty('itemGaps')) itemGaps = param.itemGaps;
    if (param.hasOwnProperty('paginationPos')) paginationPos = param.paginationPos;
    if (param.hasOwnProperty('itemHeight')) itemHeight = param.itemHeight;
    dynItemsPerRow = {hs:itemsPerRow,sm:itemsPerRow,md:itemsPerRow,lg:itemsPerRow};

    if (param.hasOwnProperty('dynItemsPerRow')){
      if (param.dynItemsPerRow.hasOwnProperty('hs')) dynItemsPerRow.hs = param.dynItemsPerRow.hs;
      if (param.dynItemsPerRow.hasOwnProperty('sm')) dynItemsPerRow.sm = param.dynItemsPerRow.sm;
      if (param.dynItemsPerRow.hasOwnProperty('md')) dynItemsPerRow.md = param.dynItemsPerRow.md;
      if (param.dynItemsPerRow.hasOwnProperty('lg')) dynItemsPerRow.lg = param.dynItemsPerRow.lg;
    }

    for(var i = 0; i<itemsPerRow; i++)
      itemPerRowString += 100/itemsPerRow + "% ";

    for(var i = 0; i<dynItemsPerRow.hs; i++) HSitemPerRowString += 100/dynItemsPerRow.hs + "% ";
    for(var i = 0; i<dynItemsPerRow.sm; i++) SMitemPerRowString += 100/dynItemsPerRow.sm + "% ";
    for(var i = 0; i<dynItemsPerRow.md; i++) MDitemPerRowString += 100/dynItemsPerRow.md + "% ";
    for(var i = 0; i<dynItemsPerRow.lg; i++) LGitemPerRowString += 100/dynItemsPerRow.lg + "% ";

    for(var i = 0; i<Math.ceil(itemsPerPage/itemsPerRow); i++)
      rowPerPageString += itemHeight + " ";

    for(var i = 0; i<Math.ceil(itemsPerPage/dynItemsPerRow.hs); i++) HSrowPerPageString += itemHeight + " ";
    for(var i = 0; i<Math.ceil(itemsPerPage/dynItemsPerRow.sm); i++) SMrowPerPageString += itemHeight + " ";
    for(var i = 0; i<Math.ceil(itemsPerPage/dynItemsPerRow.md); i++) MDrowPerPageString += itemHeight + " ";
    for(var i = 0; i<Math.ceil(itemsPerPage/dynItemsPerRow.lg); i++) LGrowPerPageString += itemHeight + " ";


    var head = $("head");
    head.prepend('<style>'+
      '@media (min-width: 480px) {\n' +
      '  .hip-grid{\n' +
      '    grid-template-columns: '+HSitemPerRowString+';\n' +
      'grid-template-rows: '+ HSrowPerPageString +
      '  }\n' +
      '}\n' +
      '@media (min-width: 768px) {\n' +
      '  .hip-grid{\n' +
      '    grid-template-columns: '+SMitemPerRowString+';\n' +
      'grid-template-rows: '+ SMrowPerPageString +
      '  }\n' +
      '}\n' +
      '@media (min-width: 992px) {\n' +
      '  .hip-grid{\n' +
      '    grid-template-columns: '+MDitemPerRowString+';\n' +
      'grid-template-rows: '+ MDrowPerPageString +
      '  }\n' +
      '}\n' +
      '@media (min-width: 1200px) {\n' +
      '  .hip-grid{\n' +
      '    grid-template-columns: '+LGitemPerRowString+';\n' +
      'grid-template-rows: '+ LGrowPerPageString +
      '  }\n' +
      '}'
      + '</style>');

    head.prepend('<style>' +
      '.hip-grid{\n' +
      '  display: grid;\n' +
      '  grid-gap: '+itemGaps+'px;\n' +
      'grid-template-columns: '+ itemPerRowString + ";" +
      'grid-template-rows: '+ rowPerPageString +
      '}\n' +
      '.hip-pagination{text-align: '+paginationPos+';}' +
      '.hip-pagination {\n' +
      '  display: block;\n' +
      '}\n' +
      '.hip-pagination a {\n' +
      'color: black;\n' +
      '  padding: 8px 16px;\n' +
      '  text-decoration: none;\n' +
      '}\n' +
      '.hip-pagination a.active {\n' +
      '  font-weight: bold;\n' +
      '}' +
      '</style>');

    objects.attr('data-item-per-page',itemsPerPage);

    $.each( objects, function( key,curObj ) {
      var hip_item_length = $(curObj).find(".hip-item").length;
      var page_length = Math.ceil(hip_item_length/itemsPerPage);
      var pagination = '<div class="hip-pagination">' +
        '<a href="#prev">&laquo;</a>';
      for (var i = 1; i<=page_length; i++)
      {
        if (i===1)
          pagination += '<a class="active" href="#'+i+'">'+i+'</a>';
        else
          pagination += '<a href="#'+i+'">'+i+'</a>';
      }
      pagination += '<a href="#next">&raquo;</a>\n' +
        '</div>';
      $(curObj).after(pagination);
      $(curObj).attr('data-cur-page','1');
      showPage(curObj)
    });

  } else {
    throw new Error('Element not found');
  }

  return this; // This is needed so other functions can keep chaining off of this
};

function showPage(elem) {
  var pageToShow = $(elem).attr('data-cur-page');
  var itemsPerPage = $(elem).attr('data-item-per-page');
  var hip_items = $(elem).find(".hip-item");
  var minLim = (pageToShow-1) * itemsPerPage;
  var maxLim = (pageToShow * itemsPerPage) - 1;

  for (var i=0; i<hip_items.length;i++){
    if (i>=minLim && i<= maxLim){
      $(hip_items[i]).css('display','block');
    }
    else {
      $(hip_items[i]).css('display','none');
    }
  }
}


$(document).on('click','.hip-pagination a',function (e) {
  e.preventDefault();
  var hip_elem = $(this).parent().prev(".hip-grid");

  var curPage = hip_elem.attr('data-cur-page');
  var itemsPerPage = hip_elem.attr('data-item-per-page');
  var hip_item_length = hip_elem.find(".hip-item").length;
  var page_length = Math.ceil(hip_item_length/itemsPerPage);
  var pageToShow = $(this).attr('href').toString().replace("#","");


  if (pageToShow==="prev"){
    if (!isNaN(curPage) && parseInt(curPage)>1) {
      hip_elem.attr('data-cur-page',parseInt(curPage) - 1);
      $(this).parent().find("a").removeClass("active");
      $(this).parent().find("a[href$='#" + (parseInt(curPage) - 1) + "']").addClass("active");

    }
  }
  else if (pageToShow==="next"){
    if (!isNaN(curPage) && parseInt(curPage)<page_length) {
      hip_elem.attr('data-cur-page',parseInt(curPage) + 1);
      $(this).parent().find("a").removeClass("active");
      $(this).parent().find("a[href$='#" + (parseInt(curPage) + 1) + "']").addClass("active");
    }
  }
  else if (!isNaN(pageToShow) && parseInt(pageToShow)<=page_length) {
    hip_elem.attr('data-cur-page',parseInt(pageToShow));
    $(this).parent().find("a").removeClass("active");
    $(this).parent().find("a[href$='#" + parseInt(pageToShow) + "']").addClass("active");
  }

  showPage(hip_elem);
});
