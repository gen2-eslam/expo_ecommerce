import LottieView from "lottie-react-native";


const AnimatedLogo = () => {
    return (
        <LottieView
          source={require("@/src/assets/lottie/logo.json")}
          autoPlay={true}
          loop={false}
          style={{ width: 300, height: 300 }}
        />
    )
}

export default AnimatedLogo
