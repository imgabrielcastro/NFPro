import React from "react";
import { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
} from "react-native";

import HeaderClient from "./ClientsHeader";

export default function Clients(){


    return(
        <View style={{flex: 1}}>
        <HeaderClient />
        </View>
    )
}