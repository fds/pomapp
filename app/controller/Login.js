Ext.define("pomapp.controller.Login", {
	extend : 'Ext.app.Controller',
	config : {
		control : {
			'button[id = btnLogin]' : {
				tap : "loginFun",
			}
		},
		refs : {
			txtAccount : "textfield[id=account]",
			txtPassword : "textfield[id=password]",
		}
	},

	loginFun : function() {
		Ext.Viewport.mask();
		Ext.Viewport.setMasked({
			xtype : 'loadmask',
			message : "用户登录中..."
		});
		var account = this.getTxtAccount().getValue();
		var password = this.getTxtPassword().getValue();
		if (Ext.isEmpty(account)) {
			this.createOverlay(this.getTxtAccount(), "登录用户名不能为空");
			Ext.Viewport.unmask();
			return;
		}
		if (Ext.isEmpty(password)) {
			this.createOverlay(this.getTxtPassword(), "登录密码不能为空");
			Ext.Viewport.unmask();
			return;
		}
		var control = this;
		// Ext.data.JsonP.request({
		// 	url : Global.webSite + "servlet/Login",
		// 	callbackKey : 'callback',
		// 	params : {
		// 		account : account,
		// 		password : password
		// 	},
		// 	callback : function(result) {
		// 		Ext.Viewport.unmask();
		// 	},
		// 	success : function(result) {
		// 		if (result.iErrorCode == "-1") {
		// 			Ext.Msg.alert("错误信息提示", result.sError_detail);
		// 			return;
		// 		} else if (result.iErrorCode == "0") {
					Ext.Viewport.removeAll(true, true);
			        Ext.Viewport.add(Ext.create('pomapp.view.Main'));
					// Ext.get("operator_id").value = result.oObject.operator_id;
					// Ext.get("operator_name").value = result.oObject.name;
					control.redirectTo("Main");
		// 		}
		// 	},
		// 	failure : function(result) {
		// 		Ext.Msg.alert("超时提醒", "登录超时，请检查网络！");
		// 	}
		// });
	},
	createOverlay : function(control, text) {
		var showOverlay = Ext.Viewport.add({
			xtype : "panel",
			left : 0,
			top : 0,
			hideOnMaskTap : true,
			modal : true,
			hidden : true,
			// centered : true,
			html : text
		});
		showOverlay.showBy(control);
	}
});