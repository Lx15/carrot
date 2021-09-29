
/* global chrome */
chrome.devtools.panels.create('柠檬', './images/icon.png', 'devtoolsPanel.html', function(panel) {
  console.log('自定义面板创建成功！');
  console.log(chrome.devtools.panels);
});

// 创建自定义侧边栏
chrome.devtools.panels.elements.createSidebarPane("Images", function(sidebar) {
  // sidebar.setPage('../html/sidebar.html'); // 指定加载某个页面
  // sidebar.setExpression('document.querySelectorAll("img")', 'All Images'); // 通过表达式来指定
  sidebar.setObject({aaa: 111, bbb: 'Hello World!'}); // 直接设置显示某个对象
});

      