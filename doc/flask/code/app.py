from flask import Flask,request,jsonify
from flask_cors import CORS
app = Flask(__name__)
# 开启跨域资源共享
cors = CORS()
# 所有资源均可跨域
cors.init_app(app=app, resources={r"/*": {"origins": "*"}})

# 服务映射到/
@app.route("/")
def index():
    result={"message":"这是首页"}
    return jsonify(result)

# 服务映射到/hello
@app.route("/hello")
def hello():
    name=request.args["name"]
    result={"message":"hello "+name}
    return jsonify(result)
# 服务映射到/add
@app.route("/add")
def add():
    a=request.args["a"]
    b=request.args["b"]
    result={"result":a+b}
    return jsonify(result)
if __name__ == '__main__':
      app.run(host="0.0.0.0",debug=True,port=8080)