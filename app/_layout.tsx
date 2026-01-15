import { Stack } from 'expo-router'
import '../global.css'

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#15803d',
        },
        headerTintColor: '#f0fdf4',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        contentStyle: {
          backgroundColor: '#f0fdf4',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'งาน IT',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="job/[id]"
        options={{
          title: 'รายละเอียดงาน',
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  )
}

export default RootLayout
