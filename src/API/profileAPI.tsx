import {DescriptionFormType} from "../components/Profile/ProfileInfo/description/DescriptionForm";
import {instance, ResponseType} from "./api";
import {PhotosType, ProfileType} from "../redux/profile-reducer";

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
    },
    savePhoto(photoFile: string) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<ResponseType<{photos: PhotosType}>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },
    saveProfile(profile: DescriptionFormType) {
        return instance.put<ResponseType>(`profile`, profile)
            .then(res => res.data)
    }
}