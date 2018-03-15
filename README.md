# react-native-check-uncheck-button

#How to Use

1) import CheckBtn from './CheckBtn';
2) constructor(){
        super();
        this.state={
            checked:false
        }
    }

3) <CheckBtn
        onValueChange={(val)=> this.setState({ checked: val })}
        text="second"
        textColor="#ffffff"
        CheckBtnFontSize={16}
        CheckBtnPadding={10}
        borderColor='#E87E04'
        unCheckBgColor='#FABE58'
        checkedBgColor='#E87E04'
    />

check CheckUnCheck.js for more.
