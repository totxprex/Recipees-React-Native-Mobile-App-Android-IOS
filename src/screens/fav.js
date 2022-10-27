import { Text } from "react-native"
import styles from "../styles";


export default function Fav({ showFav }) {


  if (!showFav) return

  return (
    <Text>Favourites</Text>
  )
}