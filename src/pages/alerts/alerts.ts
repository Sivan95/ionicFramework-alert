import {Component} from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: "alerts.html"
})
export class AlertPage{
    testCheckboxOpen: boolean;
    testCheckboxResult;
    testRadioOpen: boolean;
    testRadioResult;
    constructor(public alertCtrl: AlertController) {}

    doAlert(){
        let alert = this.alertCtrl.create({
            title: "New Friend!",
            message: 'Your friend, David Beckham, just approved your friend request!',
            buttons: ["OK"]
        });
        alert.present()
    }
    doCheckbox(){
        let alert = this.alertCtrl.create();
        alert.setTitle("Which planets have you visited");

        alert.addInput({
            type: 'checkbox',
            label: 'Mercury',
            value: "value1",
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Venus',
            value: "value2",
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Earth',
            value: "value3",
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Mars',
            value: "value4",
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Jupiter',
            value: "value5",
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Saturn',
            value: "value6",
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Uranus',
            value: "value7",
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Neptune',
            value: "value8",
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log("Checked data:", data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }
        });
        alert.present().then(() => {
            this.testCheckboxOpen = true;
        });
    }
    doConfirm(){
        let confirm = this.alertCtrl.create({
            title: "Use this lightsaber?",
            message: "Do you agree to use this lightsaber to do good across the intergalatic galaxy?",
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log("Disagree clicked");
                    }
                },
                {
                    text: "Agree",
                    handler: () => {
                        console.log("Agree clicked");
                    }
                }
            ]
        });
        confirm.present()
    }
    doPrompt(){
        let prompt = this.alertCtrl.create({
            title: "Login",
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: "title",
                    placeholder: "Title"
                },
            ],
            buttons:[
                {
                    text: "Cancel",
                    handler: data => {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Save",
                    handler: data => {
                        console.log("Saved clicked");
                    }
                }
            ]
        });
        prompt.present();
    }
    doRadio() {
        let alert = this.alertCtrl.create();
        alert.setTitle("Lightsaber Color");
        
        alert.addInput({
            type: "radio",
            label: "Blue",
            value: "blue",
            checked: true
        });
        alert.addInput({
            type: "radio",
            label: "Green",
            value: "green",
        });
        alert.addInput({
            type: "radio",
            label: "Red",
            value: "red",
        });
        alert.addInput({
            type: "radio",
            label: "Yellow",
            value: "yellow",
        });
        alert.addInput({
            type: "radio",
            label: "Purple",
            value: "purple",
        });
        alert.addInput({
            type: "radio",
            label: "White",
            value: "white",
        });
        alert.addInput({
            type: "radio",
            label: "Black",
            value: "black",
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: "OK",
            handler: data => {
                console.log("Radio data:", data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });
        alert.present().then(() => {
            this.testRadioOpen = true;
        });
    }
}