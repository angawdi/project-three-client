import React, { Component } from 'react';
import BudgetCard from './BudgetCard';
import CurrentSpendingCard from './CurrentSpendingCard';
import IncomeForm from './IncomeForm';
import ExpenditureForm from './ExpenditureForm';
import SpendingItems from './components/SpendingItems';
import Adding from './components/Adding';

const myExpenses = [
{	name: 'housing',
	amt: 1200,
	id: 0	},
{	name: 'food',
	amt: 300,
	id: 1	},
{	name: 'entertainment',
	amt: 80,
	id: 2	},
{	name: 'shopping',
	amt: 240,
	id: 3	},
{	name: 'transportation',
	amt: 100,
	id: 4	},
{	name: 'savings',
	amt: 200,
	id: 5	},

]


class UserHome extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		this.setState({
			allExpenses: myExpenses
		}, () => console.log("THIS STATE", this.state.totalExpenses))
	}


  render() {

    return(
    	<div>
	       <h1> HOME </h1>
	       <div class="wrapper">
		       <BudgetCard  
		       	/>
		       <CurrentSpendingCard 
		       		title="Current Spending"
		       		array={myExpenses} 
		      />
		       <div class="forms">
		       	   <SpendingItems user={this.props.user} />
		       	   <Adding user={this.props.user} />
			   </div>
		    </div>

	     </div>
      );
  }
}

export default UserHome;
