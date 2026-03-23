document.addEventListener('DOMContentLoaded', function() {
    // 导航栏交互
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // 允许跳转到对应页面，不再阻止默认行为
        });
    });

    // 卡片hover效果
    const cards = document.querySelectorAll('.card, .album-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 相册图片点击放大（弹窗预览）
    const albumItems = document.querySelectorAll('.album-item');
    albumItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('p').textContent;
            
            // 创建弹窗
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            `;
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = imgAlt;
            img.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 8px;
            `;
            
            modal.appendChild(img);
            modal.addEventListener('click', () => modal.remove());
            document.body.appendChild(modal);
        });
    });
});
alert("你好 朋友欢迎光临我的个人网页")