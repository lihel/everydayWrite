/**
 * Created by lmy on 17-8-21.
 */
const editSQL = {
    insert: 'insert into essay(user_id,title,text) values(?,?,?)',
    getMyAllTitle: 'select * from essay where user_id=?',
    delete:'delete from essay where ess_id=?',
    update:'UPDATE essay SET title=?,text=? where ess_id=?;'

};

module.exports = editSQL;