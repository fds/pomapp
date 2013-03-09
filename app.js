var Global = {
    webSite : "http:xxxxx",
    loadingText : '努力加载中...',
    loadMoreText : "加载更多信息...",
    submitText : "数据提交中...",
    width : "100%",
    height : "100%",
    // title:"内部测试系统",
};

Ext.Loader.setConfig({
    enabled : true
});
Ext.application({
    name: 'pomapp',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Login',
        'Main',
        'Homepage',
        'Sections',
        'Detail',
        'Pic',
        'Contact'

    ],
    
    models: [
        'Sections'
    ],
    
    stores: [
        'Sections'
    ],
    
    controllers: [
        
        'Login','Main'
    ],


    icon : 'resources/images/icon.png',
    glossOnIcon : false,
    phoneStartupScreen : 'resources/images/Homescreen.jpg',
    tabletStartupScreen : 'resources/images/tablet_startup.png',

    launch: function() {
        Ext.Viewport.add({
            xtype : "Login",
            centered : true,
            width : Global.width,
            height : Global.height
        });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
