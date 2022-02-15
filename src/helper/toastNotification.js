export async function createToast(type, message){
    this.$toast.open({
        type,
        message,
        position: 'top-right',
    })
}