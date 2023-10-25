import images from "./images"

const data = {
    user: {
        Date: 'Tuesday 12 May',
       
    },
    summary: [
        {
            title: '00666AAA01',
            Jobid: 'Job Id',
            jobscheduled:'job scheduled',
           
        },
        
      
    ],
    summaryone: [
        {
           
            percent: 58,
            chartData:{
                JobAssigned:[
                58
              ],
              Totalincomingjob:[
                48
              ]
            }
        },
        
       
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '98.76K',
            title: 'Customers'
        },
        {
            value: '12.34K',
            title: 'Products'
        },
        {
            value: '$56.78',
            title: 'Revenue'
        },
        {
            value: '$56.78',
            title: 'Revenue'
        },
        {
            value: '$56.78',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    },

    UnassignedJob:[
        {
            title: '00666AAA01',
            Jobid: 'Job Id',
            jobscheduled:'job scheduled',
           
        },
    ],
}

export default data