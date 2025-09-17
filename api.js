// Fake REST-ish handlers using the demo DB
const db=require('./db');
db.connect();

function getUsers(req,res){ res.body=db.listUsers(); }
function getUser(req,res){ res.body=db.getUser(req.params.id)||{error:"not found"}; }
function postUser(req,res){ const u=db.createUser(req.body||{name:"anon"}); res.body=u; }

function simulate(){
  const req=(params={},body={})=>({params,body});
  const res=()=>({body:null});
  let r=res(); postUser(req({}, {name:"Ada"}), r); console.log("POST", r.body);
  r=res(); getUsers(req(), r); console.log("GET /users", r.body);
}
if (require.main === module) simulate();

module.exports={getUsers,getUser,postUser};
