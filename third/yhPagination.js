/**
 * Created by zhan on 2016/7/22.
 */
var yhPagination = {
    init : function(pageSize, pageNum, totalCount, listCountArray, pageEventHandler){
        $('#pagination-container').pagination({
            dataSource: listCountArray,
            totalNumber: totalCount,
            pageSize: pageSize,
            pageNumber: pageNum,
            autoHidePrevious: true,
            autoHideNext: true,
            showNavigator: true,
            formatNavigator: '第 <span style="color: #7EB23A;"><%= currentPage %></span> 页，共 <%= totalPage %> 页，共 <%= totalNumber %> 条数据',
            alias: {
                pageNumber: 'pageNum',
                pageSize: 'pageSize'
            },
            callback: function(){

            }
        });

        $(".paginationjs-page").click(function () {
            var pageSizes = $('#pages').find('option:selected').val();
            var pageNum = $(this).attr("data-num");
            pageEventHandler(pageSizes, pageNum);
        });

        $(".paginationjs-prev").click(function () {
            var pageSizes = $('#pages').find('option:selected').val();
            var pageNum = $(this).attr("data-num");
            pageEventHandler(pageSizes, pageNum);
        });

        $(".paginationjs-next").click(function () {
            var pageSizes = $('#pages').find('option:selected').val();
            var pageNum = $(this).attr("data-num");
            pageEventHandler(pageSizes, pageNum);
        });
    }
};

$('#pages').change(function () {
    var pageSizes = $('#pages').find('option:selected').val();
    pageEventHandler(pageSizes, 1);
});
