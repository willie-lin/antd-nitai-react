// // import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
// import React, { Component,  } from 'react';
// // import './editUser.css';
//
// import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
// import './editUser.css';
//
//
// const data = [];
// for (let i = 0; i < 100; i++) {
//     data.push({
//         key: i.toString(),
//         name: `Edrward ${i}`,
//         age: 32,
//         address: `London Park no. ${i}`,
//     });
// }
// const FormItem = Form.Item;
// const EditableContext = React.createContext();
//
// const EditableRow = ({ form, index, ...props }) => (
//     <EditableContext.Provider value={form}>
//         <tr {...props} />
//     </EditableContext.Provider>
// );
//
// const EditableFormRow = Form.create()(EditableRow);
//
// class EditableCell extends React.Component {
//     getInput = () => {
//         if (this.props.inputType === 'number') {
//             return <InputNumber />;
//         }
//         return <Input />;
//     };
//
//     render() {
//         const {
//             editing,
//             dataIndex,
//             title,
//             inputType,
//             record,
//             index,
//             ...restProps
//         } = this.props;
//         return (
//             <EditableContext.Consumer>
//                 {(form) => {
//                     const { getFieldDecorator } = form;
//                     return (
//                         <td {...restProps}>
//                             {editing ? (
//                                 <FormItem style={{ margin: 0 }}>
//                                     {getFieldDecorator(dataIndex, {
//                                         rules: [{
//                                             required: true,
//                                             message: `Please Input ${title}!`,
//                                         }],
//                                         initialValue: record[dataIndex],
//                                     })(this.getInput())}
//                                 </FormItem>
//                             ) : restProps.children}
//                         </td>
//                     );
//                 }}
//             </EditableContext.Consumer>
//         );
//     }
// }
//
// class EditableTable extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { data, editingKey: '' };
//         this.columns = [
//             {
//                 title: 'name',
//                 dataIndex: 'name',
//                 width: '25%',
//                 editable: true,
//             },
//             {
//                 title: 'age',
//                 dataIndex: 'age',
//                 width: '15%',
//                 editable: true,
//             },
//             {
//                 title: 'address',
//                 dataIndex: 'address',
//                 width: '40%',
//                 editable: true,
//             },
//             {
//                 title: 'operation',
//                 dataIndex: 'operation',
//                 render: (text, record) => {
//                     const editable = this.isEditing(record);
//                     return (
//                         <div>
//                             {editable ? (
//                                 <span>
//                   <EditableContext.Consumer>
//                     {form => (
//                         <a
//                             href="javascript:;"
//                             onClick={() => this.save(form, record.key)}
//                             style={{ marginRight: 8 }}
//                         >
//                             Save
//                         </a>
//                     )}
//                   </EditableContext.Consumer>
//                   <Popconfirm
//                       title="Sure to cancel?"
//                       onConfirm={() => this.cancel(record.key)}
//                   >
//                     <a>Cancel</a>
//                   </Popconfirm>
//                 </span>
//                             ) : (
//                                 <a onClick={() => this.edit(record.key)}>Edit</a>
//                             )}
//                         </div>
//                     );
//                 },
//             },
//         ];
//     }
//
//     isEditing = (record) => {
//         return record.key === this.state.editingKey;
//     };
//
//     edit(key) {
//         this.setState({ editingKey: key });
//     }
//
//     save(form, key) {
//         form.validateFields((error, row) => {
//             if (error) {
//                 return;
//             }
//             const newData = [...this.state.data];
//             const index = newData.findIndex(item => key === item.key);
//             if (index > -1) {
//                 const item = newData[index];
//                 newData.splice(index, 1, {
//                     ...item,
//                     ...row,
//                 });
//                 this.setState({ data: newData, editingKey: '' });
//             } else {
//                 newData.push(row);
//                 this.setState({ data: newData, editingKey: '' });
//             }
//         });
//     }
//
//     cancel = () => {
//         this.setState({ editingKey: '' });
//     };
//
//     render() {
//         const components = {
//             body: {
//                 row: EditableFormRow,
//                 cell: EditableCell,
//             },
//         };
//
//         const columns = this.columns.map((col) => {
//             if (!col.editable) {
//                 return col;
//             }
//             return {
//                 ...col,
//                 onCell: record => ({
//                     record,
//                     inputType: col.dataIndex === 'age' ? 'number' : 'text',
//                     dataIndex: col.dataIndex,
//                     title: col.title,
//                     editing: this.isEditing(record),
//                 }),
//             };
//         });
//
//         return (
//             <Table
//                 components={components}
//                 bordered
//                 dataSource={this.state.data}
//                 columns={columns}
//                 rowClassName="editable-row"
//             />
//         );
//     }
// }
//
// // ReactDOM.render(<EditableTable />, mountNode);
//
// export default EditableTable;



import { Table, Input, Button, Popconfirm, Form } from 'antd';
import React, { Component } from 'react';

const FormItem = Form.Item;
// const EditableContext = React.createContext();

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    }

    componentDidMount() {
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    }

    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    }

    handleClickOutside = (e) => {
        const { editing } = this.state;
        if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save();
        }
    }

    save = () => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    }

    render() {
        const { editing } = this.state;
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {(form) => {
                            this.form = form;
                            return (
                                editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                        {form.getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `${title} is required.`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input
                                                ref={node => (this.input = node)}
                                                onPressEnter={this.save}
                                            />
                                        )}
                                    </FormItem>
                                ) : (
                                    <div
                                        className="editable-cell-value-wrap"
                                        style={{ paddingRight: 24 }}
                                        onClick={this.toggleEdit}
                                    >
                                        {restProps.children}
                                    </div>
                                )
                            );
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}

class EditableTable extends Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            editable: true,
        }, {
            title: 'age',
            dataIndex: 'age',
        }, {
            title: 'address',
            dataIndex: 'address',
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    this.state.dataSource.length >= 1
                        ? (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                                <a href="javascript:;">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];

        this.state = {
            dataSource: [{
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
        };
    }

    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }

    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    }

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add a row
                </Button>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}

// ReactDOM.render(<EditableTable />, mountNode);

export default EditableTable;