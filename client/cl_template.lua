RegisterCommand('showsvelte', function()
    -- Send message to svelte event handler
    SendNUIMessage({ action = "open"})
    SetNuiFocus(true, true)
end)

RegisterNUICallback('closeUI', function(_, cb)
  cb('ok')
  SetNuiFocus(false, false)
end)