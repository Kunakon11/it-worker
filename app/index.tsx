import '../global.css'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { jobs } from 'data/jobs'
import { router } from 'expo-router' // ตรวจสอบว่านำเข้า router ถูกต้อง
import JobCard from 'components/JobCard'

const Index = () => {
  return (
    // เปลี่ยนพื้นหลังเป็นสีเขียวอ่อนมากๆ (Green 50) เพื่อความ Minimal
    <SafeAreaView className="flex-1 bg-emerald-50/30">
      <View className="flex-1 px-6 pt-6">
        
        {/* Header Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-emerald-900 tracking-tight">
            งาน IT
          </Text>
          <View className="flex-row items-center mt-1">
            <Text className="text-sm text-emerald-600/70">
              พบทั้งหมด 
            </Text>
            <Text className="text-sm font-bold text-emerald-600 mx-1">
              {jobs.length}
            </Text>
            <Text className="text-sm text-emerald-600/70">
              ตำแหน่งงาน
            </Text>
          </View>
        </View>

        {/* List Section */}
        <FlatList
          data={jobs}
          // แก้ไขตัวสะกด keyExtractor และ toString
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <JobCard
              job={item}
              onPress={() => router.push(`/job/${item.id}`)}
            />
          )}
          showsVerticalScrollIndicator={false}
          // แก้ไขตัวสะกด paddingBottom
          contentContainerStyle={{ paddingBottom: 30 }}
          ItemSeparatorComponent={() => <View className="h-4" />} // เพิ่มระยะห่างระหว่างการ์ด
        />
      </View>
    </SafeAreaView>
  )
}

export default Index