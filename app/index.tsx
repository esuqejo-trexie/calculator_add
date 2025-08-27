import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleAdd = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 px-6">
      <Text className="text-2xl font-bold text-blue-600 mb-6">
        Calculator App
      </Text>

      {/* Input 1 */}
      <TextInput
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        className="w-full border border-gray-400 rounded-xl p-3 mb-4 bg-white text-center"
      />

      {/* Input 2 */}
      <TextInput
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        className="w-full border border-gray-400 rounded-xl p-3 mb-4 bg-white text-center"
      />

      {/* Buttons row */}
      <View className="flex-row space-x-4 mb-4">
        <TouchableOpacity
          onPress={handleAdd}
          className="bg-blue-500 rounded-xl px-6 py-3"
        >
          <Text className="text-white text-lg font-semibold">Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleReset}
          className="bg-red-500 rounded-xl px-6 py-3"
        >
          <Text className="text-white text-lg font-semibold">Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Result */}
      {result !== null && (
        <Text className="text-xl font-bold text-green-600">
          Result: {result}
        </Text>
      )}
    </View>
  );
}
