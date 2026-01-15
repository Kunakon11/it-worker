import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { jobs } from 'data/jobs'

const JobDetail = () => {
  const { id } = useLocalSearchParams()
  const job = jobs.find((j) => j.id.toString() === id)

  if (!job) {
    return (
      <SafeAreaView className="flex-1 bg-emerald-50">
        <View className="flex-1 justify-center items-center">
          <Text className="text-emerald-900 text-lg font-bold">ไม่พบงาน</Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-emerald-50">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Header Section */}
        <View className="bg-gradient-to-b from-emerald-700 to-emerald-600 px-6 py-8 pb-12">
          <Text className="text-3xl font-bold text-white mb-3">
            {job.title}
          </Text>
          <Text className="text-emerald-100 text-base mb-1">
            {job.company}
          </Text>
          <Text className="text-emerald-100/80 text-sm">
            📍 {job.location}
          </Text>
        </View>

        {/* Content Section */}
        <View className="px-6 pt-8 pb-8">
          {/* Quick Info Cards */}
          <View className="flex-row justify-between mb-8 -mt-6">
            <View className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex-1 mr-3">
              <Text className="text-emerald-600 text-xs font-semibold uppercase mb-2">
                ประเภทงาน
              </Text>
              <Text className="text-emerald-900 font-bold text-sm">
                {job.type}
              </Text>
            </View>
            <View className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex-1">
              <Text className="text-emerald-600 text-xs font-semibold uppercase mb-2">
                เงินเดือน
              </Text>
              <Text className="text-emerald-900 font-bold text-sm">
                {job.salary}
              </Text>
            </View>
          </View>

          {/* Description Section */}
          <View className="mb-8">
            <Text className="text-xl font-bold text-emerald-900 mb-4">
              รายละเอียดตำแหน่ง
            </Text>
            <View className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
              <Text className="text-emerald-900 leading-6 text-base">
                {job.title} ที่ {job.company} ในตำแหน่ง {job.type} ตั้งอยู่ที่ {job.location}{' '}
                โดยมีเงินเดือน {job.salary}
              </Text>
            </View>
          </View>

          {/* Requirements Section */}
          <View className="mb-8">
            <Text className="text-xl font-bold text-emerald-900 mb-4">
              ความต้องการ
            </Text>
            <View className="bg-white rounded-2xl p-4 border border-emerald-100">
              <Text className="text-emerald-700 leading-6 text-sm">
                • ประสบการณ์ด้านเทคโนโลยีสารสนเทศ{`\n`}
                • ทักษะการแก้ปัญหาที่ดี{`\n`}
                • มีความเป็นระเบียบและสิ่งที่เป็นระเบียบ{`\n`}
                • ความสามารถในการทำงานเป็นทีม
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Button */}
      <View className="px-6 py-4 bg-white border-t border-emerald-100">
        <TouchableOpacity className="bg-emerald-600 rounded-full py-4 active:bg-emerald-700">
          <Text className="text-white text-center font-bold text-lg">
            ยื่นใบสมัคร
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default JobDetail
