Ext.define("pomapp.view.Login", {
	extend : 'Ext.Container',
	xtype : "Login",
	requires : [ 
		'Ext.form.Panel', 
		'Ext.field.Text',
		'Ext.Toolbar',
		'Ext.Button',
		'Ext.Spacer',
		'Ext.form.FieldSet'
	],
	config : {
		fullscreen : true,
		layout : {
			type : 'vbox',
			align : 'center'
		},
		items : [ {
			id : 'status',
			xtype : 'toolbar',
			ui : 'light',
			docked : 'top',
			// title : Global.title
		},{
			xtype : 'container', 
			height : 98,
			width : 96,
			html : '<img src="resources/images/chrome.png" style="margin-top: 16px;" />'
		}, {
			xtype : "panel",
			id : 'loginForm', // 为便于操作form，给它一个id
			items : [ {
				xtype : 'fieldset', // 加一个fieldset，可以将两个文本框放在一个圆角域组里面，更美观
				margin : '-2 0 16 0', // 使用margin调整与上面元素和下面元素之间的空隙
				// fieldset里面包含两个文本框
				instructions : '请正确输入您的用户名和密码.',
				items : [ {
					id : "account",
					itemId : "account",
					xtype : 'textfield', // 第一个文本框
					name : 'account', // name用来获取值
					placeHolder : '您的账号', // 默认显示在文本框里的文字，点击和输入时它会消失
					required : true, // 必填字段
					useClearIcon : true,
				// 输入内容后文本框后面会出现一个清空按钮
				}, {
					id : "password",
					itemId : 'password',
					xtype : 'passwordfield', // 密码文本框
					name : 'password',
					placeHolder : '您的密码',
					required : true,
					useClearIcon : true,
				} ]
			}, {
				xtype : 'button',
				text : '登 录',
				ui : 'confirm', // 绿色按钮
				id : "btnLogin",
				itemId : 'btnLogin'
			} ]
		}, {
			xtype : 'toolbar',
			docked : 'bottom',
			ui : 'dark',
			items : [ {
				xtype : 'button',
				ui : 'drastic',
				text : '忘记密码'
			}, {
				xtype : 'spacer',
			}, {
				xtype : 'button',
				ui : 'action',
				text : '退出程序'
			} ]
		} ]
	}
});
