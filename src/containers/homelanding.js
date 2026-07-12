import React, {useState} from 'react';
import { HomeLanding } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { facebook_style, twitter_style, instagram_style} from './styles/social_media_button_styles'
import emailjs from 'emailjs-com';
import { serviceID, templateID, userID } from '../emailjsConfig';

// TODO - Disable SUBMIT button hover effect, after pressing submit
// TODO - Fix up Form CSS

export function HomeLandingContainer() {
    const [person, setPerson] = useState("")
    const [description, setDescription] = useState("")
    const [buttonText, setButtonText] = useState("SUBMIT")
    const [disabled, setDisabled] = useState(false)
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false)

    let input_style = {
        opacity: disabled ? "0.4" : "1.0"
    }

    let button_style = {
        "&:hover": {
            backgroundColor: "none",
            border: "none",
            boxShadow: "none",
            transform: "translate(0px,0px)"
        },
        opacity: buttonIsDisabled ? "0.4" : "1.0"
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setButtonText("SENDING...")
        setDisabled(true)

        emailjs.sendForm(serviceID, templateID, e.target.parentElement, userID)
        .then((result) => {
            setButtonIsDisabled(true)
            setButtonText("SENT 👌")
            setPerson("")
            setDescription("")

            alert("SENT 👌\n\nRefresh the page to submit again")
        }
        , (error) => {
            console.log(error)
            setButtonText("ERROR 😢")
            setButtonIsDisabled(true)
            setPerson("")
            setDescription("")
        });
    }

    return (
        <HomeLanding>
            <HomeLanding.InnerContainer>
                <HomeLanding.LeftInnerContainer>
                    <HomeLanding.LeftInnerContainerH1>Weekly features with remarkable doctors</HomeLanding.LeftInnerContainerH1>
                    <HomeLanding.LeftInnerContainerText>Click below for incredible stories</HomeLanding.LeftInnerContainerText>
                    <HomeLanding.ButtonContainer>
                        <HomeLanding.SocialMediaButton href="https://www.facebook.com/Eternal-Possibilities-242375266575305/">
                            <FontAwesomeIcon style = {facebook_style} icon={faFacebookF} />
                        </HomeLanding.SocialMediaButton>
                        <HomeLanding.SocialMediaButton href="https://twitter.com/EternalPossibi1">
                            <FontAwesomeIcon style = {twitter_style} icon={faTwitter} />
                        </HomeLanding.SocialMediaButton>
                        <HomeLanding.SocialMediaButton href="https://www.instagram.com/eternalpossibilities/">
                            <FontAwesomeIcon style = {instagram_style} icon={faInstagram} />
                        </HomeLanding.SocialMediaButton>
                    </HomeLanding.ButtonContainer>
                </HomeLanding.LeftInnerContainer>

                <HomeLanding.RightInnerContainer>
                    <HomeLanding.FormContainer>
                        <HomeLanding.Form>
                            <HomeLanding.FormText>We are always on the lookout for more remarkable untold stories. Tell us who you want interviewed.</HomeLanding.FormText>
                            <HomeLanding.FormLabel>Who do you want interviewed?</HomeLanding.FormLabel>
                            <HomeLanding.FormInput
                                style = {input_style}
                                name = "person"
                                placeholder = "Enter someone's name"
                                value = {person}
                                onChange = {(e) => setPerson(e.target.value)}
                                disabled = {disabled}
                                >    
                            </HomeLanding.FormInput>
                            <HomeLanding.FormLabel>Tell us more about them</HomeLanding.FormLabel>
                            <HomeLanding.FormTextField 
                                style = {input_style}
                                name = "message"
                                placeholder = "Enter details"
                                value = {description}
                                onChange = {(e) => setDescription(e.target.value)}
                                disabled = {disabled}
                                >
                            </HomeLanding.FormTextField>
                            <HomeLanding.SubmitButton
                                type="submit"
                                value={buttonText}
                                onClick = {handleSubmit}
                                disabled = {buttonIsDisabled}
                                style = {button_style}
                                >
                            </HomeLanding.SubmitButton>
                        </HomeLanding.Form>
                    </HomeLanding.FormContainer>
                </HomeLanding.RightInnerContainer>

            </HomeLanding.InnerContainer>
        </HomeLanding>
    )
}
