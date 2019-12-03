# HTML ITEM PAGINATION
A html element pagination library built using jQuery.
Ever wondered a gallery layout with paging system for your HTML Elements ?
We have a jQuery [Datatable](https://datatables.net/) & [Bootstrap Table](https://getbootstrap.com/docs/4.3/content/tables/) for responsive tables with advanced filtering technology.

This library is similar thing like bootstrap responsive grid but with pagination system. There will be items displayed page by page. Pages and Pagination below the element will be automatically created by this library.

So, it's a gallery like layout with paging system. There will be lots of themes and extension coming soon.

First extension developed for HIP.JS , which is [HIP-GALLERY](https://github.com/llxx-lord-xxll/html-item-pagination/tree/master/gallery)

## USAGE
### Link Library
```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/llxx-lord-xxll/html-item-pagination/lib/hip.js"></script>
```
### HTML
  ```html
<div id="html-item-pagination">
    <div class="hip-item">
        Content 1
    </div>
    <div class="hip-item">
      Content 2
    </div>
    <div class="hip-item">
      Content 3
    </div>
    <div class="hip-item">
      Content 4
    </div>
    <div class="hip-item">
      Content 5
    </div>
    <div class="hip-item">
      Content 6
    </div>
    <div class="hip-item">
      Content 7
    </div>
    <div class="hip-item">
      Content 8
    </div>
    <div class="hip-item">
      Content 9
    </div>
    <div class="hip-item">
      Content 10
    </div>
</div>
```

```html
 <script>
    $("#html-item-pagination").hip();
 </script>
```
### Advancing into parameters

Paremeter | Description
------------ | -------------
itemsPerRow | Declares items on each row in the grid layout, Default = 4
itemsPerPage | Declares items displayed in each page, Default = 12
itemGaps | Gap between each items in the grid (Integer in PX), Default = 15
paginationPos | Position of the pagination, (left,center,right), Default = 'center'
itemHeight | Row height for each rows in the grid, Default = 'auto'(flexible)
dynItemsPerRow | This is the part where it can be responsive, Example - dynItemsPerRow: {hs:1,sm:2,md:3,lg:4}
filter | Option to enable/disable filtering
filterPos | Position of the filter input, (left,center,right), Default = 'center'
filterText | Placeholder on filter input

#### dynItemsPerRow Configauration
Defaults are set to original itemsPerRow

Paremeter | Description
------------ | -------------
hs | Applies to this rule when minimum screen width of 480px.
sm | Applies to this rule when minimum screen width of 768px.
md | Applies to this rule when minimum screen width of 992px.
lg | Applies to this rule when minimum screen width of 1200px and up.

The values received as integer, are actually the items on each row in the grid layout at different screen width

## Screenshot
![HIP SCREENSHOT](https://res.cloudinary.com/llxx-lord-xxll/image/upload/v1574893830/hip/hip_rw1pc2.png)
