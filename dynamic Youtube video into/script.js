function createcard(title, cname, views, monthsold,thumbnail) {
    let formattedViews = formatViews(views);
    let html = `
    <div class="video">
        <div class="img">
            <img src="${thumbnail}"
                alt="">
        </div>
        <div class="title">
            <h1>${title}</h1>
            <div class="other-info">
                <ul>
                    <li>${cname}</li>
                    <li>${formattedViews} views</li>
                    <li>${monthsold} months old</li>
                </ul>

            </div>

        </div>
    </div> `
    document.querySelector('.body').innerHTML += html;
}
function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    } else {
        return views.toString();
    }
}
createcard("Installing VS and how website work | Sigma web development course - tutorial #1", "Adi", 40000000, 7, 'https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ'); 
createcard("Installing VS and how website work | Sigma web development course - tutorial #1", "Adi", 40000000, 7, 'https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ'); 
createcard("Installing VS and how website work | Sigma web development course - tutorial #1", "Adi", 40, 7, 'https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ'); 
createcard("Installing VS and how website work | Sigma web development course - tutorial #1a", "Adi", 400000, 7, 'https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ'); 
createcard("riya", "riya", 500000000, 1, 'https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ'); 