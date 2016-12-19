/**
 * Created by zhan on 2016/11/15.
 */

var YhHttpConstant = {
    ServiceKey: {
        LOGIN: 'login',
        /*修改密码*/
        MODIFY_PASSWORD: 'modifyPassWord',
        /*查询桥梁信息*/
        QUERY_BRIDGE_INFO: 'listBridgeByPage',
        QUERY_BRIDGE_BY_CONDITION: 'listBridgeInfoByCondition',
        COUNT_WARN: 'countWarn',
        IS_WARN_BY_BRIDGE: 'isWarnByBridge',
        LIST_WARN_SENSOR: 'listWarnSensor',
        LIST_SENSOR_BY_CONDITION: 'listSensorByCondition',

        /* 结构图 */
        QUERY_ORG_INFO: 'queryOrgInfo',
        QUERY_SENSOR_INFO_BY_CONDITION: 'querySensorInfoByCondition',
        QUERY_AND_COUNT_SENSOR_INFO_BY_BRIDGE: 'queryAndCountSensorInfoByBridge',
        QUERY_DRAWING_BY_BRIDGE: 'queryDrawingByBridge',
        QUERY_SENSOR_INFO_BY_POINT: 'querySensorInfoByPoint',
        QUERY_POINT_BY_DRAWING: 'queryPointByDrawing',
        
        /*数据统计 月报*/
		LIST_MONTH_REPORT: 'listMonthReport',

        /*实时数据*/
        LIST_SENSOR_TYPE_BY_BRIDGE: 'listSensorTypeByBridge',
        LIST_SENSOR_BY_TYPE: 'listSensorByType',
        QUERY_REAL_DATA_BY_SENSOR_NO: 'queryRealDataBySensorNo',
        LIST_REAL_DATA_BY_SENSOR_NO: 'listRealDataBySensorNo',

        /*数据统计管理*/
        LIST_DAY_REPORTS: 'listDayReport1s',
        LIST_SENSOR_DATA_BY_CONDITION: 'listSensorDataByCondition',
        LIST_SENSOR_NUMBER_SELECT: 'sensorNumberSelect',
        /*告警管理*/
        LIST_DATA_WARNING_BY_PAGE: 'listDataWarningByPage',
        UPDATE_DATA_WARNING_BY_PAGE: 'updateDataWarningByPage',
        LIST_EQUIPMENT_WARNING_BY_PAGE: 'listEquipmentWarningByPage',
        UPDATE_EQUIPMENT_WARNING_BY_PAGE: 'updateEquipmentWarningByPage',
        LIST_HIDDEN_DATA_PROBLEM_BY_PAGE: 'listHiddenDataProblemByPage',
        UPDATE_HIDDEN_DATA_PROBLEM_BY_PAGE: 'updateHiddenDataProblemByPage',
        LIST_HIDDEN_EQUIPMENT_PROBLEM_BY_PAGE: 'listHiddenEquipmentProblemByPage',
        UPDATE_HIDDEN_EQUIPMENT_PROBLEM_BY_PAGE: 'updateHiddenEquipmentProblemByPage',
        /*告警规则管理*/
        LIST_WARN_RULE_SET: 'listWarningRuleSet',
        ADD_WARN_RULE_SET: 'addWarningRuleSet',
        DELETE_WARN_RULE_SET: 'deleteWarningRuleSet',
        UPDATE_WARN_RULE_SET: 'updateWarningRuleSet',

        /*系统管理*/
        LIST_DTU_INFO_BY_PAGE: 'listDTUInfoByPage',
        ADD_DTU_INFO: 'addDTUInfo',
        UPDATE_DTU_INFO: 'updateDTUInfo',
        DELETE_DTU_INFO: 'deleteDTUInfo',
        CONFIG_DTU_INFO: 'configDTUInfo',

        ADD_OPERATE_LOG_INFO: 'addOperateLogInfo',
        LIST_OPERATE_LOG_INFO_BY_PAGE: 'listOperateLogInfoByPage',

        LIST_SENSOR_INFO_BY_PAGE: 'listSensorInfoByPage',
        ADD_SENSOR_INFO: 'addSensorInfo',
        UPDATE_SENSOR_INFO: 'updateSensorInfo',
        DELETE_SENSOR_INFO: 'deleteSensorInfo',
        /*阈值配置管理*/
        LIST_WARNING_VALUE_SET_BY_PAGE: 'listWarningValueSetByPage',
        ADD_WARNING_VALUE_SET: 'addWarningValueSet',
        UPDATE_WARNING_VALUE_SET: 'updateWarningValueSet',
        DELETE_WARNING_VALUE_SET: 'deleteWarningValueSet',
        FIND_SENSOR_BY_ID: 'findSensorById',

        QUERY_WARNING_NOTICE_SET_BY_PAGE: 'listWarningNoticeSetByPage',
        ADD_WARNING_NOTICE_SET: 'addWarningNoticeSet',
        UPDATE_WARNING_NOTICE_SET: 'updateWarningNoticeSet',
        DELETE_WARNING_NOTICE_SET: 'deleteWarningNoticeSet',


        /*用户管理*/
        QUERY_MANAGER_INFO_BY_PAGE: 'listManagerInfoByPage',
        ADD_MANAGER_INFO: 'addManagerInfo',
        UPDATE_MANAGER_INFO: 'updateManagerInfo',
        DELETE_MANAGER_INFO: 'deleteManagerInfo',
        BIND_MANAGER_MONITOR: 'bindManagerMonitor',
        RESET_MANAGER_PASSWORD: 'resetPassWord',
        LIST_MANAGER_BRIDGE: 'listManagerBridge',
        LIST_MANAGER_ROLE: 'listManagerRole',
        /*角色管理*/
        QUERY_ROLE_INFO: 'listRoleInfo',
        ADD_ROLE_INFO: 'addRoleInfo',
        UPDATE_ROLE_INFO: 'updateRoleInfo',
        DELETE_ROLE_INFO: 'deleteRoleInfo',
        BIND_MANAGER_ROLE: 'bindManagerRole',
        /* 菜单*/
        QUERY_MENU_INFO: 'listMenuInfo',
        ADD_MENU_INFO: 'addMenuInfo',
        UPDATE_MENU_INFO: 'updateMenuInfo',
        DELETE_MENU_INFO: 'deleteMenuInfo',
        BIND_ROLE_MENU: 'bindRoleMenu',
        /*权限*/
        QUERY_AUTHOR_INFO: 'listRoleMenu',
        ADD_AUTHOR_INFO: 'bindRoleMenu',
        UPDATE_AUTHOR_INFO: 'bindRoleMenu',
        DELETE_AUTHOR_INFO: 'unbindRoleMenu',

        /*桥梁管理*/
        QUERY_BRIDGE_BY_PAGE: 'listBridgeByPage', /*查询所有桥梁信息*/
        BIND_GROUP_MONITOR: 'bindGroupMonitor',
        UPDATE_GROUP: 'updateGroup', /*修改桥梁的分组*/
        QUERY_GROUP_BY_PAGE: 'listGroupByPage',

        /*桥梁分组管理*/
        QUERY_BRIDGE_GROUP: 'listBridgeGroup', /*查询桥梁组*/
        ADD_BRIDGE_GROUP: 'addGroup', /*新增桥梁组名信息*/
        UPDATE_BRIDGE_CLASSIFY_BY_PAGE: 'updateGroupRemark', /*修改桥梁分组信息*/
        DELETE_BRIDGE_GROUP: 'deleteGroup', /*删除桥梁组*/
        QUERY_GROUP_BRIDGE_DETAIL: 'groupDetail',


        ORG_AREA_LIST: 'orgAreaList',
        LIST_BRIDGE_INFO: 'listBridgeInfo',
        LIST_BRIDGE_AND_GROUP: 'groupBridge',

        /*下拉框*/
        QUERY_SELECT: 'querySelect',
        LIST_MENU_INFO: 'listMenuInfo',
        QUERY_DATA_TYPE_BY_SENSOR_NO: 'queryDataTypeBySensorNo',
        LIST_SENSOR_NO_BY_MONITOR: 'listSensorNoByMonitor'
    },
    URL: 'http://127.0.0.1:8080/app/serviceApi',
    URL_LONG_CONNECT: 'http://127.0.0.1:8080/app/serviceApi',
    //DOWN_URL: 'http://127.0.0.1:8080/agnet/download/open_api',
    ResultCode: {
        SUCCESS: '0000'
    },
    picUrl: {
        url: 'http://127.0.0.1:8080/image/view/'
    },

    /* 下拉框 */
    yhSelect: {
        area_select: '1',
        bridge_select: '2',
        sensor_type_select: '3',
        sensor_select: '4',
        role_select: '5',
        sensor_no_select: '6'
    }


};

var yhEnum = {
    memberType: {
        '00': '管理员',
        '01': '操作员'
    },
    dataType: {
        /*环境*/
        '0000': {name: '温度', unit: '℃'},
        '0001': {name: '湿度', unit: '％'},
        '0002': {name: '二氧化碳', unit: 'ppm'},
        '0003': {name: '光照', unit: 'lx'},
        '0004': {name: '土壤温度', unit: '℃'},
        '0005': {name: '土壤水分', unit: '％'},
        '0006': {name: '硫化氢', unit: 'ppm'},
        '0007': {name: '氨气', unit: 'ppm'},

        '0015': {name: 'xxx', unit: ''},
        '0016': {name: 'yyy', unit: ''},
        /*气象*/
        '0100': {name: '风速', unit: 'm/s'},
        '0101': {name: '风压', unit: 'Pa'},
        '0102': {name: '气压', unit: 'Pa'},
        '0103': {name: '雨量', unit: 'mm'},
        '0104': {name: '风向', unit: ''},
        /*岩土*/
        '0200': {name: '应力', unit: 'N'},
        '0201': {name: '应变', unit: 'με'},
        '0202': {name: '加速度', unit: 'm/s²'},
        '0203': {name: '裂缝', unit: 'mm'},
        '0204': {name: '倾斜', unit: '°'},
        '0205': {name: '挠度X', unit: 'mm'},
        '0206': {name: '挠度Y', unit: 'mm'},
        /*北斗*/
        '0300': {name: '空间位置X', unit: ''},
        '0301': {name: '空间位置Y', unit: ''},
        '0302': {name: '空间位置Z', unit: ''}
    },
    equipmentType:{
        '00':'DTU设备',
        '01':'传感器设备'
    },
    topic: {
        '00': '环境监测',
        '01': '应力/应变监测',
        '02': '振动监测',
        '03': '变形监测',
        '04': '挠度监测'
    },
    sensorStatus: {
        '00': '开',
        '01': '关',
        '02': '故障'
    },
    noticeType: {
        '00': '微信',
        '11': '邮件',
        '99': '短信'
    },
    warningLevel: {
        '1': '一级预警',
        '2': '二级预警',
        '3': '三级预警'
    },
    sensorStatus: {
        '00': '正常',
        '01': '告警'
    },
    warningStatus:{
        '00': '正常',
        '01': '告警'
    },

    warnSetStatus: {
        '00': '打开',
        '01': '关闭'
    },
    warnRule: {
        '00': '规则一',
        '01': '规则二'
    },
    reportStatus: {
    	'00': '待生成',
    	'01': '正在生成',
    	'02': '已生成'
    }

};