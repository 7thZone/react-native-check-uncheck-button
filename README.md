
\# react-native-check-uncheck-button

  

#How to Use

  

1) ``` import CheckUnCheck from './CheckUnCheck'; ```

2) 
```
constructor(){	
	super();
	this.state={
	checked:false
	}
}
```

3)  
```
<CheckUnCheck
	onValueChange={(val)=> this.setState({ checked: val })}
	text="second"
	textColor="#ffffff"
	CheckBtnFontSize={16}
	CheckBtnPadding={10}
	borderColor='#E87E04'
	unCheckBgColor='#FABE58'
	checkedBgColor='#E87E04'
/> 

  {this.state.checked === true ? console.log('Check' + this.state.checked) : console.log('un Check' + this.state.checked)}

  
```
check CheckUnCheck.js for more.