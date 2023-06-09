import { Space, Button, Tag, Popover } from 'antd'
import { StopOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, blockUser } from '../../redux/reducers/userSlice';
import { USERS, AUTH } from '../../redux/entitiesConst'
import { useEffect } from 'react';
import UserTable from '../common/table/table'
import * as table from '../common/table/tableConsts'

const Users = () => {
   const { error, loading, [USERS]: users, success, totalUsers } = useSelector(state => state[USERS]);

   const dispatch = useDispatch();

   const getUsers = (pageParams) => {
      dispatch(fetchUsers(pageParams));
   }

   useEffect(() => {
      getUsers(table.pageParams);
   }, [dispatch])

   const hiddenColumns = [
      "isBlocked",
      "id"
   ]

   const blockHandler = (record) => {
      dispatch(blockUser({ id: record.id }));
   }

   const actionRender = (_, record) =>
      <Space>
         {!record?.isBlocked ?
            <Popover title="Block the user" trigger="hover"><Button danger onClick={() => blockHandler(record)} ><StopOutlined /></Button> </Popover> :
            <Popover title="Unlock the user" trigger="hover"><Button onClick={() => blockHandler(record)}><ClockCircleOutlined /></Button></Popover>
         }
      </Space>

   const arrayRender = (_, { roles }) => (
      <>
         {roles.map((role) => {
            let color = role.length > 5 ? 'geekblue' : 'green';
            if (role === 'User') {
               color = 'volcano';
            }
            return (
               <Tag color={color} key={role}>
                  {role.toUpperCase()}
               </Tag>
            );
         })}
      </>
   )

   return (
      <>
         <div>
            <h2>Users:</h2>
            {error && <h3>{error}</h3>}
         </div>
         {success &&
            <UserTable
               entities={users}
               totalEntities={totalUsers}
               hiddenColumns={hiddenColumns}
               loading={loading}
               arrayRender={arrayRender}
               actionRender={actionRender}
               extractEntities={getUsers}
            />}
      </>
   )
}

export default Users;