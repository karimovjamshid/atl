let pageNum = document.querySelectorAll(".pagination__num");
let pageContents = document.querySelectorAll('.park__content')

pageNum.forEach(function(page){
    page.addEventListener("click", function(){
        let currentPage = page;
        let pageId = currentPage.getAttribute('data-tab');
        let currentTab = document.querySelector(pageId);

        if(! currentPage.classList.contains('pagination__num--active')){
            pageNum.forEach(function(page){
                page.classList.remove('pagination__num--active')
            })
            pageContents.forEach(function(page){
                page.classList.remove('park__content--active')
            })
            currentPage.classList.add('pagination__num--active');
            currentTab.classList.add('park__content--active')
        }

       
    })
})
document.querySelector(".pagination__num").click();