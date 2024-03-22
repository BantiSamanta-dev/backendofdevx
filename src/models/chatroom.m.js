import mongoose, { Schema } from "mongoose";
const Schema = mongoose.Schema;
const attachmentSchema = new mongoose.Schema({
    url:{type:String, required:true},
    type:{type:String ,enum :['image', 'video', 'document', 'audio', 'other'], default: 'other' },
    size:{type:Number}
})


const chatMessageSchema = new mongoose.Schema({

  content: { type: String, required: true },
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
  attachments: [attachmentSchema], // Array of message attachments
  reactions: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
  encrypted: { type: Boolean, default: false }, 
  threadParent: { type: Schema.Types.ObjectId, ref: 'ChatMessage' },

})

const chatRoomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [chatMessageSchema],
    encryptionKey: { type: String }, 
      messageDeletionEnabled: { type: Boolean, default: true }, 
      messageEditingEnabled: { type: Boolean, default: true }, 
      reactionsEnabled: { type: Boolean, default: true }, 
      attachmentsEnabled: { type: Boolean, default: true }, 
      threadingEnabled: { type: Boolean, default: true }, // Enable message threading
    
})

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;