/*!
 * jQuery HTML ITEM PAGINATION
 * Version : 1.2.0
 * Author: Arifuzzaman Pranto (llxx_lord_xxll)
 * A library to create paginated html elements
 * Copyright:- Backspace Global
 *
 * Date: 2019-11-20
 */

jQuery.fn.hip = function(param) {
  var itemsPerRow = 4;
  var itemsPerPage = 12;
  var itemGaps = '7.5px';
  var paginationPos = "center";  //in PX
  var itemHeight = "auto";
  var dynItemsPerRow;
  var itemPerRowString = "";
  var HSitemPerRowString = "";
  var SMitemPerRowString = "";
  var MDitemPerRowString = "";
  var LGitemPerRowString = "";
  var filter = false;
  var filterPos = "center";
  var filterText = "Search";

  var rowPerPageString = "";
  var HSrowPerPageString = "";
  var SMrowPerPageString = "";
  var MDrowPerPageString = "";
  var LGrowPerPageString = "";
  var objects = jQuery(this);

  if(objects.length>0){
    if (param != null){
    if (param.hasOwnProperty('itemsPerRow')) itemsPerRow = param.itemsPerRow;
    if (param.hasOwnProperty('itemsPerPage')) itemsPerPage = param.itemsPerPage;
    if (param.hasOwnProperty('itemGaps')) itemGaps = param.itemGaps;
    if (param.hasOwnProperty('paginationPos')) paginationPos = param.paginationPos;
    if (param.hasOwnProperty('itemHeight')) itemHeight = param.itemHeight;
    if (param.hasOwnProperty('filter')) filter = param.filter;
    if (param.hasOwnProperty('filterPos')) filterPos = param.filterPos;
    if (param.hasOwnProperty('filterText')) filterText = param.filterText;
    }
    dynItemsPerRow = {hs:itemsPerRow,sm:itemsPerRow,md:itemsPerRow,lg:itemsPerRow};
    if (param != null) {
      if (param.hasOwnProperty('dynItemsPerRow')) {
        if (param.dynItemsPerRow.hasOwnProperty('hs')) dynItemsPerRow.hs = param.dynItemsPerRow.hs;
        if (param.dynItemsPerRow.hasOwnProperty('sm')) dynItemsPerRow.sm = param.dynItemsPerRow.sm;
        if (param.dynItemsPerRow.hasOwnProperty('md')) dynItemsPerRow.md = param.dynItemsPerRow.md;
        if (param.dynItemsPerRow.hasOwnProperty('lg')) dynItemsPerRow.lg = param.dynItemsPerRow.lg;
      }
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


    var head = jQuery("head");
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
      '.hip-item{padding: '+itemGaps+';}' +
        '.hip-item-hidden, .hip-item-out{display: none !important;}' +
      '</style>');

    objects.attr('data-item-per-page',itemsPerPage);
    objects.addClass("hip-grid");

    jQuery.each( objects, function( key,curObj ) {

      //Pagination
      var hip_item_length = jQuery(curObj).find(".hip-item").length;
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
      jQuery(curObj).after(pagination);
      jQuery(curObj).attr('data-cur-page','1');
      showPage(curObj);

      if(filter){

        jQuery(curObj).before('<div class="hip-filter">\n' +
            '  <label class="hip-search">\n' +
            '    <input class="hip-search-input" type="text" placeholder="'+filterText+'"/>\n' +
            '  </label>\n' +
            '</div>');

        head.prepend("<style>\n" +
            "  .hip-filter{\n" +
            "    width: 100%;\n" +
            "    text-align: "+filterPos+";\n" +
            "  }\n" +
            "  .hip-search {\n" +
            "    display: inline-block;\n" +
            "    position: relative;\n" +
            "    height: 35px;\n" +
            "    width: 80px;\n" +
            "    box-sizing: border-box;\n" +
            "    margin: 0px 8px 7px 0px;\n" +
            "    padding: 5px 9px 0px 9px;\n" +
            "    border: 3px solid ;\n" +
            "    border-radius: 25px;\n" +
            "    transition: all 200ms ease;\n" +
            "    cursor: text;\n" +
            "  }\n" +
            "  .hip-search:after {\n" +
            "    content: \"\";\n" +
            "    position: absolute;\n" +
            "    width: 3px;\n" +
            "    height: 20px;\n" +
            "    right: -5px;\n" +
            "    top: 21px;\n" +
            "    background: ;\n" +
            "    border-radius: 3px;\n" +
            "    transform: rotate(-45deg);\n" +
            "    transition: all 200ms ease;\n" +
            "  }\n" +
            "  .hip-search.active, .hip-search:hover {\n" +
            "    width: 200px;\n" +
            "    margin-right: 0px;\n" +
            "  }\n" +
            "  .hip-search.active:after, .hip-search:hover:after {\n" +
            "    height: 0px;\n" +
            "  }\n" +
            "  .hip-search input {    " +
            "    width: 100% !important;\n" +
            "    border: none !important;\n" +
            "    box-sizing: border-box !important;\n" +
            "    font-family: Helvetica;\n" +
            "    font-size: 15px;\n" +
            "    color: inherit !important;\n" +
            "    background: transparent !important;\n" +
            "    outline-width: 0px;\n" +
            "    padding: 0 !important;\n" +
            "    margin: 0 !important;}" +
            "</style>");
      }
      //Filters
    });

  } else {
    throw new Error('Element not found');
  }

  return this; // This is needed so other functions can keep chaining off of this
};

function showPage(elem) {
  var pageToShow = jQuery(elem).attr('data-cur-page');
  var itemsPerPage = jQuery(elem).attr('data-item-per-page');
  var hip_items = jQuery(elem).find(".hip-item").not(".hip-item-out");
  var objPagination = jQuery(this).next();
  var minLim = (pageToShow-1) * itemsPerPage;
  var maxLim = (pageToShow * itemsPerPage) - 1;

  jQuery(elem).find(".hip-item").addClass("hip-item-hidden");

  for (var i=0; i<hip_items.length;i++){
    if (i>=minLim && i<= maxLim){
      jQuery(hip_items[i]).removeClass("hip-item-hidden");
    }
  }
}


jQuery(document).on('click','.hip-pagination a',function (e) {
  e.preventDefault();
  var hip_elem = jQuery(this).parent().prev(".hip-grid");

  var curPage = hip_elem.attr('data-cur-page');
  var itemsPerPage = hip_elem.attr('data-item-per-page');
  var hip_item_length = hip_elem.find(".hip-item").length;
  var page_length = Math.ceil(hip_item_length/itemsPerPage);
  var pageToShow = jQuery(this).attr('href').toString().replace("#","");


  if (pageToShow==="prev"){
    if (!isNaN(curPage) && parseInt(curPage)>1) {
      hip_elem.attr('data-cur-page',parseInt(curPage) - 1);
      jQuery(this).parent().find("a").removeClass("active");
      jQuery(this).parent().find("a[hrefjQuery='#" + (parseInt(curPage) - 1) + "']").addClass("active");

    }
  }
  else if (pageToShow==="next"){
    if (!isNaN(curPage) && parseInt(curPage)<page_length) {
      hip_elem.attr('data-cur-page',parseInt(curPage) + 1);
      jQuery(this).parent().find("a").removeClass("active");
      jQuery(this).parent().find("a[hrefjQuery='#" + (parseInt(curPage) + 1) + "']").addClass("active");
    }
  }
  else if (!isNaN(pageToShow) && parseInt(pageToShow)<=page_length) {
    hip_elem.attr('data-cur-page',parseInt(pageToShow));
    jQuery(this).parent().find("a").removeClass("active");
    jQuery(this).parent().find("a[hrefjQuery='#" + parseInt(pageToShow) + "']").addClass("active");
  }

  showPage(hip_elem);
});

jQuery(".hip-search-input").on('focus', function () {
  jQuery(this).parent('label').addClass('active');
});

jQuery(".hip-search-input").on('blur', function () {
  if(jQuery(this).val().length == 0)
    jQuery(this).parent('label').removeClass('active');
});

jQuery(document).on('keyup','.hip-search-input', function () {
  var obj = jQuery(this).parent().parent().next();
  var objPagination = jQuery(this).parent().parent().next().next();
  var itemsPerPage = obj.attr('data-item-per-page');
  var items = obj.find(".hip-item");
  var filteredLen = Math.ceil(getFilteredCount(items,jQuery(this).val())/itemsPerPage);

  console.log(filteredLen);
  if (jQuery(this).val()===""){
    objPagination.find("a").not(":first").not(":last").removeClass("hip-item-hidden");
  }
  else {
    objPagination.find("a").not(":first").not(":last").each(function (index,item) {
      if (index <= (filteredLen -1)){
        jQuery(item).removeClass("hip-item-hidden");
      }
      else {
        jQuery(item).addClass("hip-item-hidden");
      }
    });
  }
  // var input = jQuery(this);
  // var itemlen = 0;
  // items.css('display','none');

  objPagination.find("a[hrefjQuery='#1']").click();
});

//The core filtering engine
function getFilteredCount(items,query) {
  var init_filter = 0;
  var value = query.toLowerCase();
  items.filter(function() {
    var tags = jQuery(this).attr('data-tags');
    if(typeof tags !== "undefined")
    {
      var tagret = false;
      tags = tags.toLowerCase().split(" ");
       jQuery.each(tags,function (index,item) {
         if (item===value){
           tagret = true;
         }
       });

       if (tagret)
       {
         init_filter++;
         jQuery(this).removeClass("hip-item-out");
       }
       else if (jQuery(this).html().trim().toLowerCase().indexOf(value) > -1){
         init_filter++;
         jQuery(this).removeClass("hip-item-out");
       }
       else {
         jQuery(this).addClass("hip-item-out");
       }
    }
    else if (jQuery(this).html().trim().toLowerCase().indexOf(value) > -1){
      init_filter++;
      jQuery(this).removeClass("hip-item-out");
    }
    else {
      jQuery(this).addClass("hip-item-out");
    }
  });

  return init_filter;
}