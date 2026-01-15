import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const JobCard = ({ job, onPress }: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        // ปรับขอบให้เป็นสีเขียวอ่อน (emerald-100) และเงาที่นุ่มนวลขึ้น
        className="bg-white p-5 rounded-2xl mb-1 shadow-sm border border-emerald-100/50"
      >
        {/* ตำแหน่งงาน - ใช้สีเขียวเข้มเกือบดำ */}
        <Text className="text-lg font-bold text-emerald-950 mb-1">
          {job.title}
        </Text>
        
        {/* ชื่อบริษัท */}
        <Text className="text-sm text-emerald-700/60 mb-4">
          {job.company}
        </Text>
        
        {/* Tags กลุ่มข้อมูล */}
        <View className="flex-row flex-wrap gap-2 mb-4">
          {/* Location Tag */}
          <View className="bg-emerald-50 px-3 py-1.5 rounded-lg">
            <Text className="text-xs text-emerald-700 font-medium">
              📍 {job.location}
            </Text>
          </View>
          
          {/* Job Type Tag */}
          <View className="bg-emerald-100/50 px-3 py-1.5 rounded-lg">
            <Text className="text-xs text-emerald-800 font-medium">
              🌿 {job.type}
            </Text>
          </View>
        </View>
        
        {/* ส่วนท้าย: เงินเดือน */}
        <View className="border-t border-emerald-50 pt-3">
          <Text className="text-sm font-bold text-emerald-600">
            {job.salary}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default JobCard