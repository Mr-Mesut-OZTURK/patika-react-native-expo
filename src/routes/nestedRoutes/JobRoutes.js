import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { JobsApp } from '@src/src/apps';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator();

const JobRoutes = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="jobshome"
                component={JobsApp.JobsHome}
                options={{
                    title: "Home",
                    tabBarIcon: (param) => {

                        return (
                            <Ionicons name={param.focused ? "home" : "home-outline"} size={24} color="#F9629F" />
                        )
                    }

                }}
            />
            <Tab.Screen
                name="favotitejobs"
                component={JobsApp.FavoriteJobs}
                options={{
                    title: "Favorite",
                    tabBarIcon: (param) => {

                        return (
                            <MaterialIcons name={param.focused ? "favorite" : "favorite-outline"} size={24} color="#F9629F" />
                        )
                    }

                }}
            />
        </Tab.Navigator>
    )
}

export default JobRoutes