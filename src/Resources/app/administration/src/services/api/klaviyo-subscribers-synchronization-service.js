class KlaviyoSubscribersSynchronizationApiService {
    constructor(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
        this.name = 'klaviyoSubscribersSynchronizationApiService';
    }

    getJobStatus() {
        const headers = this.getHeaders();
        return this.httpClient.get('/klaviyo/integration/job/_action/subscribers/synchronization/get_status', {}, { headers });
    }

    scheduleSynchronization() {
        const headers = this.getHeaders();
        return this.httpClient.post('/klaviyo/integration/job/_action/subscribers/synchronization/schedule', {}, { headers });
    }

    getHeaders() {
        return {
            Accept: 'application/json',
            Authorization: `Bearer ${this.loginService.getToken()}`,
            'Content-Type': 'application/json'
        };
    }
}

export default KlaviyoSubscribersSynchronizationApiService;
