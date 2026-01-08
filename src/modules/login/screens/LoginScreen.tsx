import { BackgroundImage, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.styles";
import { ContainerLogin } from "../styles/loginScreen.styles";
const LoginScreen = () => {

    return (<div>
        <ContainerLoginScreen>
        <BackgroundImage src="./background.jpeg"/>
        <ContainerLogin>
            <LimitedContainer>
                <LogoImage src="./logo.png" />
            </LimitedContainer>
        </ContainerLogin>
        </ContainerLoginScreen>
    </div>)
};

export default LoginScreen;