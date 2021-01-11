<template>
    <div style="display:flex;flex-direction:column;just-contents:center">
        <Upload
            :before-upload="handleUpload"
            action="#">
            <Button icon="ios-cloud-upload-outline">选择读取的文件</Button>
        </Upload>
        <Input type="textarea" :rows=10 v-model="content" style="width:30rem"/>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                content:""
            }
        },
        methods: {

            handleUpload (file) {
                let me=this;
                const reader = new FileReader();
				// 开始读取时：
				reader.onloadstart = function(e) {
					console.log("开始读取", e);
				};
				// 正在读取：
				reader.onprogress = function(e) {
					console.log("正在读取",e);
				};
				// 读取出错时：
				reader.onerror = function(e) {
					console.log("读取出错",e);
				};
				// 读取中断时：
				reader.onabort = function(e) {
					console.log("读取中断",e);
				};
				// 读取成功时：
				reader.onload = function(e) {
                    console.log("读取成功",e.target.result);
                    me.content="文件内容是："+e.target.result;
				};
				// 读取完成，无论成功失败：
				reader.onloadend = function(e) {
					console.log("读取完成，无论成功失败",e);
				};



				/*-------  4种文件读功能(方法、函数)  ------*/
			/*	reader.readAsText(file,"utf-8");
			  	reader.readAsBinaryString(file);  	// 将文件读取为二进制编码
				reader.readAsDataURL(file);  		// 将文件读取为DataURL
				reader.readAsText(none);  			// 终端读取操作 			*/

				
				reader.readAsText(file,"utf-8");
                return false;
            }
        }
    }
</script>