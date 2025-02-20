import asyncio;
import websockets;
from websockets.exceptions import ConnectionClosed

USERS = []
userCadastred = False

async def handle(websocket):

    async for message in websockets:

        userCadastred = any(item == websocket for item in USERS)

        if(userCadastred == False):
            USERS.append(websocket);
            print("Usuario cadastro")

    for user in USERS:
        await user.send(message)

start_server = websockets.serve(handle, "127.0.0.1", 50000)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()