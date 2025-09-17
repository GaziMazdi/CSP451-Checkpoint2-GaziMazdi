// Simple demo "DB" module (in-memory)
const DB={users:[]};
function connect(url){ console.log("Connecting to", url||"memory"); return true; }
function disconnect(){ console.log("Disconnect"); return true; }
function createUser(u){ if(!u.id) u.id=String(Date.now()); DB.users.push(u); return u; }
function getUser(id){ return DB.users.find(x=>x.id===id)||null; }
function listUsers(){ return DB.users.slice(); }
function removeUser(id){ const i=DB.users.findIndex(x=>x.id===id); if(i>=0){DB.users.splice(i,1); return true;} return false; }
module.exports={connect,disconnect,createUser,getUser,listUsers,removeUser,DB};
