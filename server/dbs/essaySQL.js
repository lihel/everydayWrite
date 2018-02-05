/**
 * Created by lmy on 18-2-4.
 */
const essaySql = {
    insert: 'insert into essay(ess_id,user_id,title,text,ess_type,date) values(0,?,?,?,?,?)',
    getMyAllTitle: 'select * from essay',
    delete:'delete from essay where ess_id=?',
    update:'UPDATE essay SET title=?,text=? where ess_id=?;'
};

module.exports = essaySql;