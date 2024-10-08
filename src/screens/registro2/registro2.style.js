import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {

    container:{
        flex: 1,
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white
    
    },

    form: {
        width: "100%",
        marginBottom: 20

    },

    formHorizontal: {
     flexDirection: "row"
    },

    formGroup: {
        width: "100%",
        marginTop: 25,
        marginBottom: 40

    },

    form70: {
        width: "70%",
        marginBottom: 15,
        paddingRight: 10
    },

    form30: {
        width: "30%",
        marginBottom: 15
    },

    footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 40

    },

    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    }

}